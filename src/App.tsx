import { Heading } from "./components/Heading";
import { Trash } from 'lucide-react';
export function App() {
  return (
    <>
    <div className='App'>
     <Heading text="Hello Wor"> <button><Trash color="red" size={48} /></button></Heading>
    </div>
    </>
  );
}
