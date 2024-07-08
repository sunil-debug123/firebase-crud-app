import { app } from "@/firebase/firebase";
import { getDatabase, ref, set } from "firebase/database";

const database = getDatabase(app);

export default function Home() {

  return (
    <main>
      <div className="App">
        <h1>FireBase React App</h1>
      </div>
    </main>
  );
}
