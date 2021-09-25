  
import { Link } from 'react-router-dom';
import logo from 'media/logo.png';
const Header  = () =>{
return(
<>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">      
                <Link to='/'>
                    <span className="sr-only">Workflow</span>
                    <img className="h-12 w-auto sm:h-12" src={logo} alt=""/>
                </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button></button>
              <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Ventas</a>
              <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Usuarios</a>
              <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Productos</a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <div className="ml-3 relative">
              <div>
                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAJFBMVEXMzMz09PTl5eXg4ODW1tbPz8/v7+/q6urb29vx8fHi4uLs7OwKc4KuAAAD6UlEQVR4nO2dB5aFIAwALWC9/333s67rtxtIw5c5gfMgISClKAzDMAzDMAzDMAzDMAzDMAzDMMTxrh7ati8/9G071M5Lf1EEvhvGcsc4dFnJ+K7dS8y02bhcWcwu0t94j6+bO41AU+tuFl89sZio9KpANDSr1D3M45OUa+lvPsA9io0tjZP+7g1+iNEIDKr6lzsY/J4yKmqULl4joGZUie5WM4O0wQQw6R5RSTsEEDxUmKB4KDBB8hA3ScxX34jmLgeuSs7pJceThHFwzyjnUWN6lKVYCekRO1aglyq7kBtErkmQG+TTJDIeiKl3RiYF3y6WwGklPDy+R1lKhDt6qAckwp2gZ8n0LQqPsuT3cDQi/AUXSYhIBAlJiEgECWrhu8BfAtN48Ec7yXAY4B4SiZIWf9p6jQhR9uXPvyZiIiZiIiZiIiZiIgpFXlM0moiJmMgNVCLcHiZiIiZiIpmJvGQ1viNajC/LkfUXNdourSMYd24l78a8hm2vJtkvhRmuXwtks8MZrlkiUcJa4Epd6LuCtnDtEqL2YBsVTUSbyGuC/TUirxlHyFZQZthWUqLOhT2n4fKg7lt869jEVSPjdpS3zEfQd8V/w7tDnmAX9gzzbmyyzsV+RIlouitwJLEjGE0akV3+0OPr94gdcEfuXoInXVHbRPIkokeMk0b0YDtiISx8rP0tR1zRihWxo3v/IJX0Cu7jQIl3vrnUOSjxruICC4RFFZFjezsQ5ovikT6RHO8KIn0iMd41RPpEYryriPSJpM6lpmMFUu4Okv72FfGVinxtsiY6TBQFyETkApGam5wWokwUekSNJnpGkG8iliKUXKy1ISLe1UX6BPx6Q+kvPgE8f5eep58Bzlsqc1YRMTFRNqgvAINEa4iAJ706JrhHAKt5VfX7CmC0a4118JCodDgswGlLbdKC7uSS/toLXiMCquR11vBFuGkduAQxarxz3UEtZhdVqcsNCWuNzaDEJclCjUtXYf16qwTHeTQLURdkCyEXN5DtPOv54gUhuq9hiX3wqBcH9Vh5/9gLHnTPxjiK8L6irwi6GFOX2oLdxdgbYwGzWTgj4wicaPHwF2vw6ZN7GP4GzFiSNm464T61po0NFl0agSgVfRoBsIpXqRFoIbGiJ8SPeB72GhLuFQ8fJEt5k4qLB29f6e5VC3f9K+7FNgkuX4mLf7FNgvNX4nKIjm/OIgXz5SAejt8nIj9KTMFBIs4kW23ZbZ7I1GNnkq3HxiRjj5UJ4YFVDv6n9OQ3BlDzl4Uxj67J8HdgLqu65JjfvZHkl0xx4HPPWDPVSxokNEmWJdaemvqOEy4ahquZeDARbfwAGzlHuZRNMPMAAAAASUVORK5CYII=" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">

          <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
         
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
     
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="md:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" classNames="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button type="button" className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Dashboard
      </h1>
      <div class="mt-3 px-2 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
        </div>
    </div>
  </header>
  
</>
);
}
export default Header;