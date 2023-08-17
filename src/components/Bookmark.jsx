export function Bookmark({  href, title,  image , children}) {
  return (
    <a href={href} className="not-prose">

    <div className="flex flex-col items-center bg-white border rounded-lg shadow-xl cursor-pointer  md:flex-row hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
      <img className="object-contain w-full h-auto rounded-t-lg  md:w-64 md:rounded-lg" src={image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
        <span className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-300">{title}</span>
          <div className="mb-3 font-normal prose">{children}</div>
        </div>

      </div>
      </a>
  )
}
