import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'

// Social share image: an ultramarine blueprint field with the page title,
// rendered on demand and cached. Satori only reads static TTF fonts and
// hex colors, so the fonts are fixed instances of Google Sans Flex and the
// colors are the brand tokens converted from OKLCH.
const colors = {
  brand: '#1a29a2',
  brandLine: '#2942b2',
  onBrand: '#f8fafe',
  onBrandMuted: '#c8d8f6',
  citron: '#d9f141',
  ink: '#101524',
}

const assets = path.join(process.cwd(), 'src')
let cache

function loadAssets() {
  cache ??= Promise.all([
    readFile(path.join(assets, 'assets/og/GoogleSansFlex-800.ttf')),
    readFile(path.join(assets, 'assets/og/GoogleSansFlex-500.ttf')),
    readFile(path.join(assets, 'images/marko-head.jpg')),
  ])
  return cache
}

function clip(value, max) {
  let text = typeof value === 'string' ? value.trim() : ''
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text
}

export default async function handler(req, res) {
  let title = clip(req.query.title, 110) || 'Marko Bodiroza'
  let description = clip(req.query.desc, 170)
  let [heavy, medium, portrait] = await loadAssets()
  let portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`

  let image = new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        backgroundColor: colors.brand,
        backgroundImage: `linear-gradient(${colors.brandLine} 1px, transparent 1px), linear-gradient(90deg, ${colors.brandLine} 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
        color: colors.onBrand,
        fontFamily: 'Google Sans Flex',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: colors.citron,
          }}
        >
          AI Strategist & System Builder
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: title.length > 60 ? 60 : 76,
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: '-0.035em',
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.4,
              color: colors.onBrandMuted,
              maxWidth: 940,
            }}
          >
            {description}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {/* Satori renders plain img; next/image does not apply here */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          alt=""
          width={84}
          height={84}
          style={{
            borderRadius: 9999,
            border: `4px solid ${colors.citron}`,
            objectFit: 'cover',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 32, fontWeight: 800 }}>Marko Bodiroza</div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: colors.onBrandMuted,
            }}
          >
            markobodiroza.com
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Google Sans Flex', data: heavy, weight: 800, style: 'normal' },
        {
          name: 'Google Sans Flex',
          data: medium,
          weight: 500,
          style: 'normal',
        },
      ],
    },
  )

  res.setHeader('Content-Type', 'image/png')
  res.setHeader(
    'Cache-Control',
    'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400',
  )
  res.send(Buffer.from(await image.arrayBuffer()))
}
