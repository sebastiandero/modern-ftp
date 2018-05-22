import EventEmitter = Electron.EventEmitter
import * as Client from 'ftp'

class Session extends EventEmitter {
    options: SessionOptions
    client: Client

    constructor(options: SessionOptions) {
        super()
        this.options = options
        this.client = new Client()
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
