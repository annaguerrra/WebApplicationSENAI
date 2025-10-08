import {Link} from 'react-router-dom'

export default function Home(){
    return (
        <div className="flex flex-col gap-6 justify-center text-center">
            <h1 className="text-5xl font-bold text-amber-100 mb-4">Choose your coffee type</h1>

            <div className="flex flex-wrap justify-center gap-10">
                <Link to="/hot"
                    className="transform transition duration-300 hover:scale-105">
                    <img 
                        src="https://img.freepik.com/free-photo/steaming-coffee-cup-table_1373-58.jpg?semt=ais_hybrid&w=740&q=80" 
                        className="w-60 h-60 object-cover rounded-2xl shadow-lg" />
                    <p className="mt-3 text-lg font-medium text-amber-100">Hot Coffees</p>
                </Link>

                <Link
                    to="/iced"
                    className="transform transition duration-300 hover:scale-105">
                    <img src="https://www.torani.com/media/catalog/product/V/a/Vanilla_Bean_Iced_Coffee.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=815&width=650&canvas=650:815"
                        className="w-60 h-60 object-cover rounded-2xl shadow-lg" />
                    <p className="mt-3 text-lg font-medium text-amber-100">Iced Coffees</p>
                </Link>
            </div>
        </div>

       
    )
}
