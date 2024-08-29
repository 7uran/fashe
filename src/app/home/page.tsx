import CategoryCard from "../../components/CategoryCard/categoryCard";
import Slider from "../../components/Slider/slider";
import Spinner from "../../components/Spinner/spinner";

export default function HomePage() {

    return (<div className="">
        <section> <Slider /></section>
        <section>
            <div>
                <CategoryCard />
            </div>
        </section>


    </div>)
}