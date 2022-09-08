import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quo
        voluptatibus amet, beatae ab facilis quisquam rem similique consequatur
        minima dolor eligendi soluta magnam quis? Dolor, expedita facere?
        Nostrum, esse?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quo
        voluptatibus amet, beatae ab facilis quisquam rem similique consequatur
        minima dolor eligendi soluta magnam quis? Dolor, expedita facere?
        Nostrum, esse?
      </p>
      <Link href="/ninjas">
        <a>See Ninja List</a>
      </Link>
    </div>
  );
}
