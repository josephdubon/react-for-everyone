export function Filter({setFilter, filter}) {
    return (
        <label>
            Filter:
            <input
                type="text"
                onChange={(e) => setFilter(e.target.value)} value={filter}
            />
        </label>
    )
}