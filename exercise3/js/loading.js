function handleLoading() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('table').style.display = 'none';
    document.getElementById('alone').style.display = 'none';

    setTimeout(() => {
        document.getElementById('table').style.display = 'table';
        document.getElementById('loader').style.display = 'none';
        document.getElementById('alone').style.display = 'none';
        arrData.map(handleArr);
    }, 4000)

}