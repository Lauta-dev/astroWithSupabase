import { createClient } from "@supabase/supabase-js"
import 'dotenv/config'

const db = process.env.DB
const op = {
auth: {
      persistSession: false,
    }
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  op
)


/*
data: [
    { id: 1, name: 'HXH', mal_id: 12, type: 'Accion' },
    { id: 2, name: 'Dragon ball', mal_id: 1234, type: 'Dragon' }
  ]

*/

/*
  // Filters
  .eq('column', 'Equal to')
  .gt('column', 'Greater than')
  .lt('column', 'Less than')
  .gte('column', 'Greater than or equal to')
  .lte('column', 'Less than or equal to')
  .like('column', '%CaseSensitive%')
  .ilike('column', '%CaseInsensitive%')
  .is('column', null)
  .in('column', ['Array', 'Values'])
  .neq('column', 'Not equal to')

  // Arrays
  .cs('array_column', ['array', 'contains'])
  .cd('array_column', ['contained', 'by'])
*/

// Mostrar todos los elementos ( en .select() se agregar las filas que se quieres filtrar )
const { data, error } = await supabase
  .from(db)
  .select()
  .like('title', '%H%')
  //.eq('id', 6) // <- devuelve un elemento que es igual al segundo parametro

if (!error) console.log(data)
if (error) console.log(error)

// Agregar elemento

/*

const { data, error } = await supabase
  .from(db)
  .insert([
    {title: "DBZ", mal_id: 1, type: "Accion"},
    {title: "Hunter X Hunter", mal_id: 2, type: "Fantacia"},
  ])
  .select() // <-- Cuando se inserte en la tabla se imprimira la tabla conmpleta

if (!error) console.log(data)
if (error) console.log(error)

*/
