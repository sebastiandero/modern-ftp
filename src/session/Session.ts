import EventEmitter = Electron.EventEmitter

class Session extends EventEmitter {
    options: SessionOptions

    constructor(options: SessionOptions) {
        super()
        this.options = options
    }

    public close() {
        this.emit('close')
    }
}

class SessionFactory {
    activeSessions: Array<Session>

    public async openSession(options: SessionOptions): Promise<Session> {
        let session: Session = new Session(options)

        session.on('removeSession', () => {
            this.removeSession(session)
        })

        return session
    }

    private removeSession(session: Session) {
        this.activeSessions.splice(this.activeSessions.indexOf(session), 1)
    }
}
