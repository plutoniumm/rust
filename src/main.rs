mod support;

fn main() {
    support::run();

    // const (BASESTR: &str, BASE: i32) = ("true", 1);
    let (base_str, base) = ("true", 1);
    println!(
        "{attr} is not {0} but {attr} is {1}",
        !base,
        base_str,
        attr = "1"
    );

    const BIG: i32 = 22;
    let mut small = 20;
    small = small + 1;
    println!("{} > {1}", BIG, small)
}
