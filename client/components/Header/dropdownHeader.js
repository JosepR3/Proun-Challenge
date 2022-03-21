export default function DropdownHeader() {
  return (
    <>
      <a
        className="dropdown-toggle steps__subtitle header__links px-2 pb-1 mx-1"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        ¿POR QUÉ CLICPISO?
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </>
  );
}
