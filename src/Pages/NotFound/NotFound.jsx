import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-16 min-h-[60vh] rounded-xl mt-10 flex items-center justify-center">
      <div className="mx-auto max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-[#244D3F]">404</h1>
          <h2 className="text-3xl font-bold text-[#1F2937]">Page Not Found</h2>
          <p className="text-[#64748B] text-lg">
            Sorry, the page you're looking for doesn't exist.
          </p>
        </div>

     
          
            <Link
              to="/"
              className="bg-green-primary w-6/12 mx-auto text-white font-medium py-3 px-6 rounded-md hover:bg-[#1a3a2e] transition-colors text-center"
            >
              Back to Home
            </Link>
           
         

         
     
      </div>
    </section>
  )
}
