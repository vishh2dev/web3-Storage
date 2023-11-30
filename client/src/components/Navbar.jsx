

export const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
       <div className="flex h-14 items-center justify-between border-b border-zinc-200">
       <a href="#">
          <span className="sr-only">Workflow</span>
          <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
        </a>

        <div className="hiddden items-center space-x-4 sm:flex">
         
          <div className="flex  lg:w-0 lg:flex-1 justify-end  ">
            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Get started </a>
          </div>
            
          </div>
      </div>
    </nav>

  )
}
