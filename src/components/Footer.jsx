export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] px-6 py-8 text-center">
      <p className="text-white text-xl font-bold mb-1">CabVerts</p>
      <p className="text-gray-400 text-sm mb-4">Get Paid To Drive</p>
      <p className="text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} CabVerts. All rights reserved. Dublin, Ireland.
      </p>
    </footer>
  )
}
