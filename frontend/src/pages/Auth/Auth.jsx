export const Auth = ({ children }) => {
    // Layout for auth related pages
    return (
        <div 
            className="h-screen flex items-center justify-center bg-slack"
        >
            <div className="md:h-auto md:w-105">
                {children}
            </div>

        </div>
    );
};