import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GoBook } from "react-icons/go";
export default function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <div className="text-5xl"><GoBook /></div>
                <p>Stories <br />Open source project for storytelling powered by AI assistante</p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4 text-3xl">
                    <a href="mailto:bouazizimoahamedaziz76@gmail.com"><MdOutlineMailOutline /></a>
                    <a href="" target="_blank"><FaGithub /></a>
                </div>
            </nav>
        </footer>
    )
}