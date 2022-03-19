
export default function DropdownHeader(){
    return(
      <div className="dropdown show">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ¿POR QUE CLICKPISO?
        </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    )
}