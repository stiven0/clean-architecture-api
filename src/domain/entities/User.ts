export type UserProps = {
  id: number;           // la API externa usa números
  name: string;
  email: string;
  password?: string;    // puede venir al crear
  avatar?: string;
  role?: string;
};

export class User {
  constructor(private props: UserProps) {
    if (!props.name) throw new Error("Nombre requerido");
    if (!props.email || !props.email.includes("@")) throw new Error("Email inválido");
  }

  get id() { return this.props.id; }
  get name() { return this.props.name; }
  get email() { return this.props.email; }
  get avatar() { return this.props.avatar; }
  
  toJSON() {
    return { id: this.id, name: this.name, email: this.email, avatar: this.avatar, role: this.props.role };
  }
}
