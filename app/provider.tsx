"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  
  React.useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    document.body.classList.add('dark');
    document.body.style.colorScheme = 'dark';
    
    // Override any system preference changes
    const observer = new MutationObserver(() => {
      if (!document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.add('dark');
      }
      if (!document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
      }
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}