export default function NewStoryHero() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/create-book.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Make your own Story</h1>
                    <p className="mb-5">What story will you tell the world? Start writing Now.</p>
                </div>
            </div>
        </div>
    );
}