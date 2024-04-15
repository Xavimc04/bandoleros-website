import Devblogs from "@/components/layouts/landing/devblogs";
import { APP_DISCORD, APP_NAME } from "@/lib/constants";

export default function Page() {
    return <main className="w-screen bg-black text-white">
        <section className="h-screen relative">
            {/* @ Background image */}
            <img 
                src="/images/neon_wallpaper.jpg"
                className="h-screen object-cover w-screen z-10 opacity-40"
            />

            {/* @ Header links */}
            <nav className="absolute top-0 right-0 w-screen z-50">
                <ul className="flex justify-end items-start p-4"> 
                    <li>
                        <ul className="flex gap-5">
                            <li>
                                <a
                                    href={ APP_DISCORD }
                                >
                                    <img 
                                        src="/icons/discord.svg"
                                    />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            {/* @ Middle characters */}
            <section className="absolute bottom-0 left-1/2 -translate-x-1/2 h-screen z-20 w-full md:w-[500px] lg:w-[950px]">
                <div className="relative h-screen flex justify-center items-end">
                    <img 
                        src="/images/characters/neon_girl_character.png"
                        className="h-5/6 mt-20 fixed left-0 -mb-20 scale-x-[-1] hidden lg:block"
                        draggable="false"
                    />
                    
                    <img 
                        src="/images/characters/main_character.png"
                        className="h-3/4 lg:h-full z-40"
                        draggable="false"
                    />

                    <img 
                        src="/images/characters/blue_right_character.png"
                        className="h-5/6 mt-20 -right-10 fixed -mb-20 hidden lg:block"
                        draggable="false"
                    />
                </div>
            </section>
        </section>

        {/* @ Page content */}
        <section className="absolute -mt-20 z-30 bg-black border-t-8 border-red-500 w-screen flex flex-col items-center">
            <article 
                className="border-8 border-indigo-400 flex bg-black -mt-10 px-5 py-3 rounded-lg items-center gap-4"
                style={{
                    boxShadow: "0 0 10px 5px black"
                }}
            >
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>

                <h1 className="poppins text-3xl font-extrabold stroke">
                    En desarrollo
                </h1>
            </article>

            <Devblogs />
    
            {/* @ Rights reserved */}
            <section className="bg-zinc-900 p-7 text-sm flex justify-center w-full mt-20">
                <article className="w-full xl:w-1/2 flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between">
                    <p>
                        { APP_NAME } &copy; { new Date().getFullYear() }, Todos los derechos reservados.
                    </p>

                    <p className="flex items-center gap-2">
                        <span>Desarrollado por</span>
                        
                        <a 
                            className="text-red-500 hover:underline"
                            href="https://xaviermorell.es" 
                            target="_blank"
                        >
                            Xavier Morell ❤️
                        </a>
                    </p>
                </article>
            </section>
        </section>
    </main>
}