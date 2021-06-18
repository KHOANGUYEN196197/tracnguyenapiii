class BaseController {
  _mainService;

  //#region Response functions
  ok = (res, result) => res.status(200).send({ result });
  created = (res, result) => res.status(201).send({ result });
  validate = (res, message) => res.status(422).send({ message });
  noContent = (res) => res.status(204).send();
  paging = (res, pagingData) =>
    res.status(200).send({ total: pagingData.count, result: pagingData.rows });
  error = (res, code, message) => res.status(code).send({ message });
  //#endregion

  //#region Basic functions
  getAll = async (req, res, next) => {
    try {
      const response = await this._mainService.getAll(req.query);
      return this.paging(res, response);
    } catch (error) {
      return next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const response = await this._mainService.getOne(req.query);
      return this.ok(res, response);
    } catch (error) {
      return next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      const response = await this._mainService.create(req.body);
      return this.created(res, response);
    } catch (error) {
      return next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const response = await this._mainService.update(req.body);
      return this.noContent(res);
    } catch (error) {
      return next(error);
    }
  };
  delete = async (req, res, next) => {
    try {
      const response = await this._mainService.delete(req.params.id);
      return this.noContent(res);
    } catch (error) {
      return next(error);
    }
  };
  //#endregion
}

module.exports = BaseController;
