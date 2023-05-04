import useGeners from "../hook/useGeners"

function GenersList() {
    const { genres,isLoading,errors } = useGeners();
    return (
        <>
           {genres.map(gener => <div key={gener.id}>{gener.name}</div>)}
        </>
    )
}

export default GenersList