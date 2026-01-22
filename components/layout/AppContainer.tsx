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
        grid
        grid-rows-[auto_auto]
      ">
                {children}
            </div>
        </div>
    )
}
