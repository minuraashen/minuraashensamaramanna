import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'heading': ['Playfair Display', 'serif'],
			},
			   colors: {
				   border: 'hsl(var(--border))',
				   input: 'hsl(var(--input))',
				   ring: 'hsl(var(--ring))',
				   background: 'hsl(var(--background))',
				   foreground: 'hsl(var(--foreground))',
				   primary: {
				   DEFAULT: 'hsl(var(--primary))',
				   foreground: 'hsl(var(--primary-foreground))',
				   },
				   secondary: {
				   DEFAULT: 'hsl(var(--secondary))',
				   foreground: 'hsl(var(--secondary-foreground))',
				   },
				   accent: {
				   DEFAULT: 'hsl(var(--accent))',
				   foreground: 'hsl(var(--accent-foreground))',
				   },
				   // muted color defined below with CSS variable
				   destructive: {
					   DEFAULT: 'hsl(var(--destructive))',
					   foreground: 'hsl(var(--destructive-foreground))'
				   },
				   muted: {
					   DEFAULT: 'hsl(var(--muted))',
					   foreground: 'hsl(var(--muted-foreground))'
				   },

				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.92) translateY(16px)', opacity: '0' },
					'100%': { transform: 'scale(1) translateY(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				'blob-drift': {
					'0%, 100%': { transform: 'translate(0,0) scale(1)' },
					'25%': { transform: 'translate(40px,-30px) scale(1.05)' },
					'50%': { transform: 'translate(-20px,40px) scale(0.97)' },
					'75%': { transform: 'translate(30px,20px) scale(1.03)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '0% center' },
					'100%': { backgroundPosition: '200% center' }
				},
				'terminal-blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'neon-pulse': {
					'0%, 100%': { boxShadow: '0 0 10px hsl(177 63% 48% / 0.4), 0 0 30px hsl(177 63% 48% / 0.15)' },
					'50%': { boxShadow: '0 0 25px hsl(177 63% 48% / 0.7), 0 0 60px hsl(177 63% 48% / 0.30)' }
				},
				'stack-in': {
					'0%': { opacity: '0', transform: 'perspective(1000px) rotateX(25deg) translateY(60px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'perspective(1000px) rotateX(0deg) translateY(0) scale(1)' }
				},
				'spin-slow': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				},
				'card-rise-3d': {
					'0%': { opacity: '0', transform: 'perspective(800px) rotateX(20deg) translateY(40px)' },
					'100%': { opacity: '1', transform: 'perspective(800px) rotateX(0deg) translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.35s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'blob-drift': 'blob-drift 14s ease-in-out infinite',
				'shimmer': 'shimmer 4s linear infinite',
				'terminal-blink': 'terminal-blink 1.1s step-end infinite',
				'neon-pulse': 'neon-pulse 2.5s ease-in-out infinite',
				'stack-in': 'stack-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
				'spin-slow': 'spin-slow 20s linear infinite',
				'card-rise-3d': 'card-rise-3d 0.7s cubic-bezier(0.16,1,0.3,1) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
