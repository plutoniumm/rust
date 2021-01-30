fn main() {
    let x = vec!["a", "b", "c", "d"];

    for (i, v) in x.iter().enumerate() {
        println!("{} - {}", i, v);
    }
}
