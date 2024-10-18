import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-white hover:text-gray-300">
    {children}
  </a>
)

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-white hover:underline">
    {children}
  </a>
)

const AppStoreButton = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
  <a href={href} className="inline-block">
    <img src={src} alt={alt} className="h-10" />
  </a>
)

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <SocialIcon href="#"><Facebook className="h-6 w-6" /></SocialIcon>
            <SocialIcon href="#"><Twitter className="h-6 w-6" /></SocialIcon>
            <SocialIcon href="#"><Linkedin className="h-6 w-6" /></SocialIcon>
            <SocialIcon href="#"><Instagram className="h-6 w-6" /></SocialIcon>
            <SocialIcon href="#"><Youtube className="h-6 w-6" /></SocialIcon>
          </div>
          <div className="flex space-x-4">
            <img src="/placeholder.svg?height=40&width=120" alt="Houselogic" className="h-10" />
            <img src="/placeholder.svg?height=40&width=120" alt="Realtor" className="h-10" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          <FooterLink href="#">About us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Advertise with us</FooterLink>
          <FooterLink href="#">Agent support</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Terms</FooterLink>
        </div>

        <div className="sm:grid-cols-3  gap-4 mb-8">
          <FooterLink href="#">Home Made</FooterLink>
          <FooterLink href="#">Tech Blog</FooterLink>
          <FooterLink href="#">Agent Blog</FooterLink>
          <FooterLink href="#">Sitemap</FooterLink>
     
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Get the app</h3>
          <div className="flex space-x-4">
            <AppStoreButton 
              href="#" 
              src="/placeholder.svg?height=40&width=120" 
              alt="Download on the App Store" 
            />
            <AppStoreButton 
              href="#" 
              src="/placeholder.svg?height=40&width=120" 
              alt="Get it on Google Play" 
            />
          </div>
        </div>

        <div className="text-sm text-gray-400">
          © 2024 Estato.
        </div>
      </div>
    </footer>
  )
}