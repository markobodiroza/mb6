
import logoNP from '@/images/logos/nplogo.png'
import logoMicrosoft from '@/images/logos/rt.svg'
import logoXOR from '@/images/logos/netinfo'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
const siteMeta = {
    title: "Marko Bodiroza",
    description: "Data Engineer & AI Specialist helping companies get more sales, create digital strategies, and transform.",
    copyright: "Marko Bodiroza",
    author: {
        name: "Marko Bodiroza",
        email: "mb@markobodiroza.com",
        twitter: "https://twitter.com/markobodiroza",
        instagram: "https://instagram.com/gradijent",
        github: "https://github.com.com/markobodiroza",
        linkedin: "https://linkedin.com/in/markobodiroza"
    },
    siteUrl: "https://markobodiroza.com"
}
export const resume = [
    {
      company: 'New Perspective',
      title: 'Director of Marketing and Innovation',
      logo: logoNP,
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'RT-RK Institute',
      title: 'Senior Web Developer',
      logo: logoMicrosoft,
      start: '2016',
      end: '2020',
    },
    {
      company: 'Net Informatika',
      title: 'Web Developer',
      logo: logoXOR,
      start: '2014',
      end: '2016',
    },
  ]
export const projects = [
  {
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
    logo: logoFleek,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },


]


export default siteMeta;