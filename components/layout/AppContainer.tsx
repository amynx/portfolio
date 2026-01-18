interface AppContainerProps {
    children: React.ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
    return (
        <div className="
      min-h-screen
      w-full
      flex
      justify-center
    ">
            <div className="
            
        w-full
        max-w-[1600px]
        grid
        grid-rows-[auto_auto]
        px-4
        sm:px-6
        lg:px-8
        
      ">
                {children}
            </div>
        </div>
    )
}
