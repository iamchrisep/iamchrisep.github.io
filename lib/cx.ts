type ClassValue = string | null | undefined | false | Record<string, boolean>;

export function cx(...values: ClassValue[]) {
    return values
        .flatMap((value) => {
            if (!value) return [];
            if (typeof value === "string") return [value];
            return Object.entries(value)
                .filter(([, enabled]) => enabled)
                .map(([className]) => className);
        })
        .join(" ");
}
