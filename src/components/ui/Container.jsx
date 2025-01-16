// src/components/ui/Container.jsx
const Container = ({ children, className = '', size = 'default' }) => {
    const sizes = {
      small: 'max-w-3xl',
      default: 'max-w-7xl',
      large: 'max-w-8xl'
    };
  
    return (
      <div className={`${sizes[size]} mx-auto px-8 w-full ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Container;