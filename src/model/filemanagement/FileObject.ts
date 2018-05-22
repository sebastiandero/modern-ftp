class FileObject extends FSItem {
    size: number

    constructor(name: String, path: String, isRemote: boolean, size: number) {
        super(name, path, isRemote)
        this.size = size
    }
}
