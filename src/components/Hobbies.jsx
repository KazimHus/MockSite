import { hobbies } from '../constants'
import { guitar } from '../utils'
import { drawings} from '../utils'

const Hobbies = () => {
  return (
  <section id="hobbies" className="bg-main text-grey px-96 py-28">
    <h1 className="text-6xl pirata-one-regular text-center mb-10">Hobbies</h1>
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-20 pt-10">
      {hobbies.map((name, index) => (
        <div
          key={index}
          className="w-[350px] h-[250px] bg-container-grey rounded-xl overflow-hidden shadow-md flex flex-col">
          <video
            src={drawings}
            autoPlay
            muted
            loop
            playsInline
            className="h-[80%] object-cover rounded-xl" 
          />
          <div className="h-[20%] p-2 flex flex-col justify-center text-center">
            <h2 className="text-xl texturina-text-bold pb-2">
              {name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Hobbies
