class Directory extends FSItem {
    children: Array<FSItem>

    constructor(name: String, path: String, isRemote: boolean, children: Array<FSItem>) {
        super(name, path, isRemote)
        this.children = children
    }
}
