import { DropdownArr } from "./DropdownArr";

export default function Theme() {
  return (
    <div>
      <div className="space-y-4 p-4 bg-muted/50">
        <section className="flex items-center justify-between px-12">
          <h4>
            GTK Theme{" "}
            <i className="font-extralight">(For GNOME-based applications)</i>:
          </h4>
          <DropdownArr label="Select GTK Theme" themes={[]} />
        </section>
        <section className="flex items-center justify-between px-12">
          <h4>
            QT Theme{" "}
            <i className="font-extralight">(For QT-based applications)</i>:
          </h4>
          <DropdownArr label="Select QT Theme" themes={[]} />
        </section>
      </div>
      <h6 className="px-24 py-12">
        You can download themes from any source and store them in
        <code>"$HOME/.config/hypr/themes"</code>. Make sure to create the folder
        if it doesn’t already exist.
      </h6>
    </div>
  );
}
