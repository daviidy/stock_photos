import PhotosList from '../containers/PhotosList';

const App = () => (
  <>
    <section className="jumbotron text-center text-white">
      <h1 className="display-1 font-weight-bold">Unsplash</h1>
      <p className="subtitle font-weight-bold">
        The internet’s source of freely-usable images.
        Powered by creators everywhere.
      </p>
    </section>
    <section className="container">
      <div className="row">
        <PhotosList />
      </div>
    </section>
  </>
);

export default App;
