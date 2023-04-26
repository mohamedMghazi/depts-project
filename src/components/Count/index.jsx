import "./style.scss";

export default function Count({ department, count }) {
    if (count === 0) {
        return <h2 style={{ textAlign: 'center' }}>There are no engineers in this department.</h2>
    }

    return <h2>There {count > 1 ? "are" : "is"} ({count}) {count > 1 ? "engineers" : "engineer"} at {department} department</h2>
}
