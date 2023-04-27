import PropTypes from "prop-types";
import "./style.scss";

export default function Count({ department, count }) {
    if (count === 0) {
        return <h2 style={{ textAlign: 'center' }}>There are no engineers in this department.</h2>
    }

    const text = `There ${count > 1 ? "are" : "is"} (${count}) ${count > 1 ? "engineers" : "engineer"} at ${department} department`;

    return <h2>{text}</h2>
}

Count.propTypes = {
    department: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

Count.defaultProps = {
    department: '',
    count: 0
}
