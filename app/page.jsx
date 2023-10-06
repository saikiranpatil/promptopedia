import Feed from "@components/Feed"
import { connectDB } from "@utils/database"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
        <p className="desc text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sunt dignissimos saepe assumenda autem.
        </p>
      </h1>

      <Feed />
    </section>
  )
}

export default Home