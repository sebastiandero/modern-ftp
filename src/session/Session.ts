class Session {
    options: SessionOptions

    constructor(options: SessionOptions) {
        this.options = options
    }
}

class SessionFactory {
    activeSessions: Array<Session>

    public async openSession(options: SessionOptions): Promise<Session> {
        let session: Session = new Session(options)

        return session
    }
}
