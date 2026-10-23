import { useEffect, useMemo, useState } from 'react'

// Development only: pick a Tailwind 4 color for any site token and see it
// live, per mode. Overrides are injected as one <style> tag and kept in
// localStorage, so they survive reloads but never reach production.

// Tailwind 4 palette as hex (theme variables are only emitted when used)
const palette = {
  slate: [
    '#f8fafc',
    '#f1f5f9',
    '#e2e8f0',
    '#cad5e2',
    '#90a1b9',
    '#62748e',
    '#45556c',
    '#314158',
    '#1d293d',
    '#0f172b',
    '#020618',
  ],
  gray: [
    '#f9fafb',
    '#f3f4f6',
    '#e5e7eb',
    '#d1d5dc',
    '#99a1af',
    '#6a7282',
    '#4a5565',
    '#364153',
    '#1e2939',
    '#101828',
    '#030712',
  ],
  zinc: [
    '#fafafa',
    '#f4f4f5',
    '#e4e4e7',
    '#d4d4d8',
    '#9f9fa9',
    '#71717b',
    '#52525c',
    '#3f3f46',
    '#27272a',
    '#18181b',
    '#09090b',
  ],
  stone: [
    '#fafaf9',
    '#f5f5f4',
    '#e7e5e4',
    '#d6d3d1',
    '#a6a09b',
    '#79716b',
    '#57534d',
    '#44403b',
    '#292524',
    '#1c1917',
    '#0c0a09',
  ],
  indigo: [
    '#eef2ff',
    '#e0e7ff',
    '#c6d2ff',
    '#a3b3ff',
    '#7c86ff',
    '#615fff',
    '#4f39f6',
    '#432dd7',
    '#372aac',
    '#312c85',
    '#1e1a4d',
  ],
  blue: [
    '#eff6ff',
    '#dbeafe',
    '#bedbff',
    '#8ec5ff',
    '#51a2ff',
    '#2b7fff',
    '#155dfc',
    '#1447e6',
    '#193cb8',
    '#1c398e',
    '#162456',
  ],
  sky: [
    '#f0f9ff',
    '#dff2fe',
    '#b8e6fe',
    '#74d4ff',
    '#00bcff',
    '#00a6f4',
    '#0084d1',
    '#0069a8',
    '#00598a',
    '#024a70',
    '#052f4a',
  ],
  violet: [
    '#f5f3ff',
    '#ede9fe',
    '#ddd6ff',
    '#c4b4ff',
    '#a684ff',
    '#8e51ff',
    '#7f22fe',
    '#7008e7',
    '#5d0ec0',
    '#4d179a',
    '#2f0d68',
  ],
  lime: [
    '#f7fee7',
    '#ecfcca',
    '#d8f999',
    '#bbf451',
    '#9ae600',
    '#7ccf00',
    '#5ea500',
    '#497d00',
    '#3c6300',
    '#35530e',
    '#192e03',
  ],
  yellow: [
    '#fefce8',
    '#fef9c2',
    '#fff085',
    '#ffdf20',
    '#fdc700',
    '#f0b100',
    '#d08700',
    '#a65f00',
    '#894b00',
    '#733e0a',
    '#432004',
  ],
  emerald: [
    '#ecfdf5',
    '#d0fae5',
    '#a4f4cf',
    '#5ee9b5',
    '#00d492',
    '#00bc7d',
    '#009966',
    '#007a55',
    '#006045',
    '#004f3b',
    '#002c22',
  ],
}
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
const colors = Object.fromEntries(
  Object.entries(palette).flatMap(([family, hexes]) =>
    hexes.map((hex, index) => [`${family}-${steps[index]}`, hex]),
  ),
)

const groups = [
  [
    'Surfaces',
    [
      'paper',
      'sunken',
      'panel',
      'raised',
      'pill',
      'tag-bg',
      'card-side',
      'night',
    ],
  ],
  ['Lines', ['rule', 'rule-strong', 'field']],
  [
    'Text',
    ['ink', 'graphite', 'muted', 'on-raised', 'on-night', 'on-night-muted'],
  ],
  ['Brand', ['brand', 'brand-line', 'on-brand', 'on-brand-muted']],
  [
    'Accent',
    ['citron', 'on-citron', 'link', 'action', 'action-hover', 'action-fg'],
  ],
]

// The combo from the Tailwind previewer, as a starting point
const presets = {
  'Your Combo': {
    light: {
      paper: 'stone-50',
      sunken: 'indigo-50',
      panel: 'indigo-100',
      raised: 'slate-50',
      pill: 'lime-500',
      'tag-bg': 'lime-300',
      'card-side': 'indigo-50',
      rule: 'slate-300',
      'rule-strong': 'slate-900',
      ink: 'slate-900',
      graphite: 'slate-700',
      brand: 'indigo-900',
      'brand-line': 'blue-800',
      'on-brand': 'slate-50',
      'on-brand-muted': 'indigo-100',
      citron: 'lime-300',
      'on-citron': 'slate-950',
      link: 'blue-800',
      action: 'indigo-800',
      'action-fg': 'slate-50',
      night: 'slate-50',
      'on-night': 'slate-950',
    },
    dark: {
      paper: 'slate-800',
      sunken: 'indigo-900',
      panel: 'slate-500',
      raised: 'indigo-900',
      pill: 'lime-50',
      'tag-bg': 'indigo-500',
      'card-side': 'slate-700',
      rule: 'slate-600',
      'rule-strong': 'slate-100',
      ink: 'slate-50',
      graphite: 'slate-50',
      brand: 'indigo-500',
      'brand-line': 'indigo-600',
      'on-brand': 'slate-50',
      'on-brand-muted': 'indigo-100',
      citron: 'lime-50',
      'on-citron': 'slate-900',
      link: 'lime-50',
      action: 'lime-100',
      'action-fg': 'slate-800',
      night: 'slate-800',
      'on-night': 'slate-100',
    },
  },
  'Slate Spread': {
    light: {
      paper: 'slate-50',
      sunken: 'indigo-50',
      panel: 'indigo-50',
      raised: 'slate-50',
      pill: 'indigo-50',
      'tag-bg': 'indigo-100',
      'card-side': 'slate-50',
      rule: 'slate-300',
      'rule-strong': 'slate-900',
      ink: 'slate-900',
      graphite: 'slate-700',
      brand: 'indigo-800',
      'brand-line': 'blue-800',
      'on-brand': 'slate-50',
      'on-brand-muted': 'blue-200',
      citron: 'lime-300',
      'on-citron': 'slate-900',
      link: 'blue-800',
      action: 'indigo-800',
      'action-fg': 'slate-50',
      night: 'slate-900',
      'on-night': 'slate-50',
    },
    dark: {
      paper: 'slate-950',
      sunken: 'slate-900',
      panel: 'slate-800',
      raised: 'slate-700',
      pill: 'slate-700',
      'tag-bg': 'slate-700',
      'card-side': 'slate-900',
      rule: 'slate-700',
      'rule-strong': 'slate-600',
      ink: 'slate-100',
      graphite: 'slate-300',
      brand: 'indigo-900',
      'brand-line': 'blue-900',
      'on-brand': 'slate-50',
      'on-brand-muted': 'indigo-100',
      citron: 'lime-300',
      'on-citron': 'slate-900',
      link: 'lime-300',
      action: 'lime-300',
      'action-fg': 'slate-900',
      night: 'slate-950',
      'on-night': 'slate-100',
    },
  },
}

const storageKey = 'devColorOverrides'
const empty = { light: {}, dark: {} }

function readStored() {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey)) ?? empty
  } catch {
    return empty
  }
}

function toCss(overrides) {
  let block = (selector, values) => {
    let lines = Object.entries(values).map(
      ([token, name]) => `  --${token}: ${colors[name]}; /* ${name} */`,
    )
    return lines.length ? `${selector} {\n${lines.join('\n')}\n}` : ''
  }
  return [
    block('html:root:not(.dark)', overrides.light),
    block('html.dark', overrides.dark),
  ]
    .filter(Boolean)
    .join('\n\n')
}

function useMode() {
  let [mode, setMode] = useState('light')

  useEffect(() => {
    let html = document.documentElement
    let sync = () => setMode(html.classList.contains('dark') ? 'dark' : 'light')
    sync()
    let observer = new MutationObserver(sync)
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return mode
}

export default function DevColorPanel() {
  let mode = useMode()
  let [open, setOpen] = useState(false)
  // Rendered client-side only (ssr: false), so storage is available here
  let [overrides, setOverrides] = useState(readStored)
  let [copied, setCopied] = useState(false)
  let css = useMemo(() => toCss(overrides), [overrides])

  useEffect(() => {
    let style = document.getElementById('dev-color-overrides')
    if (!style) {
      style = document.createElement('style')
      style.id = 'dev-color-overrides'
      document.head.appendChild(style)
    }
    style.textContent = css
    window.localStorage.setItem(storageKey, JSON.stringify(overrides))
  }, [css, overrides])

  function setToken(token, name) {
    setOverrides((current) => {
      let values = { ...current[mode] }
      if (name) values[token] = name
      else delete values[token]
      return { ...current, [mode]: values }
    })
  }

  async function copy() {
    await navigator.clipboard.writeText(css || '/* No overrides */')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  // The panel keeps its own fixed colors so it stays readable whatever you pick
  return (
    <div className="fixed right-4 bottom-4 z-[100] font-sans text-[13px]">
      {open && (
        <div className="mb-3 flex max-h-[80vh] w-80 flex-col overflow-hidden rounded-2xl bg-[#ffffff] text-[#0f172b] shadow-[0_20px_50px_-20px_rgba(2,6,24,0.6)] ring-1 ring-[#cad5e2]">
          <div className="flex items-center justify-between gap-3 border-b border-[#e2e8f0] px-4 py-3">
            <p className="font-bold">
              Colors: {mode === 'dark' ? 'Dark' : 'Light'} Mode
            </p>
            <button
              type="button"
              onClick={() => setOverrides(empty)}
              className="rounded-full px-3 py-1.5 font-semibold text-[#45556c] hover:bg-[#f1f5f9]"
            >
              Reset All
            </button>
          </div>
          <div className="flex flex-wrap gap-2 border-b border-[#e2e8f0] px-4 py-3">
            {Object.entries(presets).map(([label, preset]) => (
              <button
                key={label}
                type="button"
                onClick={() => setOverrides(preset)}
                className="rounded-full border border-[#cad5e2] px-3 py-1.5 font-semibold hover:border-[#0f172b]"
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2">
            {groups.map(([title, tokens]) => (
              <fieldset key={title} className="py-2">
                <legend className="py-1 font-bold text-[#45556c]">
                  {title}
                </legend>
                {tokens.map((token) => {
                  let name = overrides[mode][token] ?? ''
                  return (
                    <label
                      key={token}
                      className="flex min-h-10 items-center gap-2 border-b border-[#f1f5f9]"
                    >
                      <span
                        className="h-5 w-5 flex-none rounded ring-1 ring-[#cad5e2]"
                        style={{ background: `var(--${token})` }}
                      />
                      <span className="flex-1 font-semibold">{token}</span>
                      <select
                        value={name}
                        onChange={(event) =>
                          setToken(token, event.target.value)
                        }
                        className="h-8 w-32 rounded-md border border-[#cad5e2] bg-[#ffffff] px-1"
                      >
                        <option value="">Site default</option>
                        {Object.keys(colors).map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                    </label>
                  )
                })}
              </fieldset>
            ))}
          </div>
          <div className="border-t border-[#e2e8f0] px-4 py-3">
            <button
              type="button"
              onClick={copy}
              className="w-full rounded-full bg-[#0f172b] px-4 py-2.5 font-bold text-[#f8fafc]"
            >
              {copied ? 'Copied' : 'Copy Overrides as CSS'}
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="ml-auto flex rounded-full bg-[#0f172b] px-4 py-2.5 font-bold text-[#f8fafc] shadow-lg ring-2 ring-[#bbf451]"
      >
        {open ? 'Close Colors' : 'Colors'}
      </button>
    </div>
  )
}
