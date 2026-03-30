type Props = {
    id?: string;
    title: string;
    intro?: string;
};

export function SectionHeading({ id, title, intro }: Props) {
    return (
        <div className="mb-7 space-y-3">
            <h2 id={id} className="text-3xl font-bold text-foreground md:text-4xl">
                {title}
            </h2>
            {intro ? <p className="max-w-3xl text-base text-muted">{intro}</p> : null}
        </div>
    );
}
