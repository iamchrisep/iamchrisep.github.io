type Props = {
    title: string;
    items: readonly string[];
};

export function SkillGroup({ title, items }: Props) {
    return (
        <article className="glass-panel-soft rounded-[1.35rem] p-6">
            <h3 className="mb-4 text-lg font-bold text-foreground">{title}</h3>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {items.map((item) => (
                    <li key={item} className="tag">
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    );
}
