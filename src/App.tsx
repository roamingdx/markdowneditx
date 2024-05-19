import Editor from "./components/Editor";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";

const App = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className='container mx-auto mt-10'>
      <div className={darkMode.value ? 'w-4/6 mx-auto rounded-md min-h-[720px] overflow-hidden dark-mode text-white' :
        'bg-zinc-50 w-4/6 mx-auto rounded-md min-h-[720px] overflow-hidden'
      }>
        <nav className='w-full border-b pb-2'>
          <div className='flex items-center justify-between'>
            <a className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' href="/" target="_self">Markdown Editx</a>
            <DarkModeToggle
              onChange={darkMode.toggle}
              checked={darkMode.value}
              size={60}
            />
          </div>
        </nav>
        <main className='w-full px-5 max-h-[720px] h-screen'>
          <Editor themeIsToggled={darkMode.value} />
        </main>
      </div>
      <footer className='text-center'>
        <span>© 2024 Markdown Editx by roamingdx. All rights reserved</span>
      </footer>
    </div>
  )
}

export default App