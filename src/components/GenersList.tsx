import useGeners from "../hook/useGeners"

function GenersList() {
    const { data,isLoading,errors } = useGeners();
    return (
        <>
           {data.map(gener => <div key={gener.id}>{gener.name}</div>)}
        </>
    )
}

export default GenersList