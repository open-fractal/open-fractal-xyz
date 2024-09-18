import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CardsSection() {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-black">Smart Contracts</CardTitle>
              <CardDescription className="text-black">Efficient and secure</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2 text-black">Streamlined Development</h3>
              <p className="text-gray-600">Deploy and interact with smart contracts on Fractal Bitcoin with ease and confidence.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-black">Indexers</CardTitle>
              <CardDescription className="text-black">Fast and reliable</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2 text-black">Efficient Data Retrieval</h3>
              <p className="text-gray-600">Index and query blockchain data swiftly, enhancing your application's performance.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-black">Scalability</CardTitle>
              <CardDescription className="text-black">Built for growth</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2 text-black">Future-Proof Solutions</h3>
              <p className="text-gray-600">Scale your applications seamlessly without compromising on speed or efficiency.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}