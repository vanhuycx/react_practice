class NotesStore {
    constructor(state,name) {
        this.state = state;
        this.name = name;
        this.notes = {}
    }
    addNote(state,name) {
        const accepted_states = ['completed','active','others']
        try {
            if (!name) {
                return ('Error: Name cannot be empty')
            }
            if (accepted_states.includes(state)) {
                if (!(state in this.notes)){
                    this.notes[state] = [name]
                } else {
                    this.notes[state].push(name)  
                }             
            } else {
                return ('Error: Invalid state '+ state)
                }
        } catch(e) {
            return e
        }
    }
    
    getNotes(state) {
        const accepted_states = ['completed','active','others']
        try {
            if (accepted_states.includes(state)) {
                if (!(state in this.notes) || this.notes[state].length===0) {
                    return ('No Notes')   
                }  else {
                    return this.notes[state]
                }
            } else {
                return ('Error: Invalid state '+ state)
            }
        } catch(e) {
            return e
        }
    }
}

const notes =  new NotesStore()

notes.addNote('completed','Math test')
console.log(notes.getNotes('completed'))
notes.addNote('completed','Bio')
console.log(notes.getNotes('completed'))
notes.addNote('active','Chemistry')


console.log(notes.addNote('others',''))
console.log(notes.addNote('dawd','daw'))
console.log(notes.getNotes('activ'))