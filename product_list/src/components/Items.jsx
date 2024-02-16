export default function Items({ data }) {
  return (
      <>
          <p>
              <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                  {data.category}
              </span>
              <span style={{ marginRight: "10px" }}>
                  {data.name}
              </span>
              <span>{data.price}</span>
          </p>
      </>
  )
}