import FieldComponent from "./components/FieldComponent";
import ItemCard from "./components/ItemCard";
import { createContext } from "react";
import Container from "./components/Container"
export const context = createContext();

export default function App() {

  const styles = [
    {
      task: {
        title: "Complete Project A",
        description: "Finish all tasks related to Project A",
        status: "Not Started"
      },
      style: {
        title: "text-red-500",
        tag: "bg-red-100 text-red-500"
      }
    },
    {
      task: {
        title: "Review Documentation",
        description: "Check and revise the project documentation",
        status: "In Progress"
      },
      style: {
        title: "text-blue-500",
        tag: "bg-blue-100 text-blue-500"
      }
    },
    {
      task: {
        title: "Test New Features",
        description: "Conduct testing for recently implemented features",
        status: "Completed"
      },
      style: {
        title: "text-green-500",
        tag: "bg-green-100 text-green-500"
      }
    }
  ];

  const fieldStyle = [
    {
      name: "Todo",
      color: "bg-red-500"
    },
    {
      name: "In Progress",
      color: "bg-green-400"
    },
    {
      name: "Completed",
      color: "bg-blue-700"
    }

  ]

  return (
    <section className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-600 w-full h-screen flex gap-2">

      <context.Provider value={"Ashok"}>


        {/* {styles.map((item) => (
        <ItemCard key={item.title} style={item.style} item={item.task} />
      ))} */}

        {/* <div className=" bg-white w-96 h-16 rounded-3xl ml-7 mt-7 bg-gradient-to-r from-purple-100 to-indigo-300 flex justify-center items-center gap-3 p-5">
          <input type="text" className=" w-52 rounded-xl outline-none p-1 text-xl font-normal" />
          <button className=" text-xs bg-blue-700 text-white p-3 rounded-xl">Submit</button>
      </div>

      {fieldStyle.map((field) => (
        <FieldComponent key={field.name} field={field} />
      ))}
 */}

        {/* <DndProvider backend={HTML5Backend}>
          <Card text={"HELLO"} />
        </DndProvider> */}

        <Container />

      </context.Provider>

    </section>
  )
}