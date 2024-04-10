export default function Page() {
    return <main className="h-screen overflow-hidden w-screen bg-black text-white">
        <img 
            src="/images/neon_wallpaper.jpg"
            className="h-screen object-cover w-screen fixed right-0 top-0 z-10 opacity-40"
        />

        <section className="fixed bottom-0 left-1/2 -translate-x-1/2 h-screen z-20 w-[950px]">
            <div className="relative h-screen flex justify-center items-end">
                <img 
                    src="/images/characters/neon_girl_character.png"
                    className="h-5/6 mt-20 fixed left-0 -mb-20 scale-x-[-1]"
                    draggable="false"
                />
                
                <img 
                    src="/images/characters/main_character.png"
                    className="h-full z-40"
                    draggable="false"
                />

                <img 
                    src="/images/characters/blue_right_character.png"
                    className="h-5/6 mt-20 -right-10 fixed -mb-20"
                    draggable="false"
                />
            </div>
        </section>

        <section className="z-50 bg-black/80 border-t-8 border-red-500 fixed bottom-0 w-screen h-20 flex flex-col items-center">
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
        </section>
    </main>
}